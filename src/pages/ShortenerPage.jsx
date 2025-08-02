import { useState,useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import URLForm from '../components/URLForm';
import URLList from '../components/URLList';
import { logEvent } from '../utils/logger';

const ShortenerPage = () => {
  const [urls, setUrls] = useState([]);

  const handleSubmit = (urlDataList) => {
    const shortened = urlDataList.map((data) => {
      const code = data.shortcode || Math.random().toString(36).substr(2, 6);
      const now = new Date();
      const expiry = new Date(now.getTime() + (data.validity || 30) * 60000);

      const newUrl = {
        original: data.url,
        shortcode: code,
        validity: data.validity || 30,
        expiry,
        createdAt: now,
        clickCount: 0,
        clicks: [],
      };

      logEvent('ShortURL Created', { shortcode: code, url: data.url });
      return newUrl;
    });

    setUrls((prev) => {
  const merged = [...prev, ...shortened];
  const unique = merged.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.shortcode === item.shortcode)
  );
  return unique;
});

  };

  useEffect(() => {
  localStorage.setItem('shortenedUrls', JSON.stringify(urls));
}, [urls]);

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('shortenedUrls') || '[]');
  setUrls(stored);
}, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Shorten Your URLs</Typography>
      <URLForm onSubmit={handleSubmit} />
      <URLList urls={urls} />
    </Container>
  );
};

export default ShortenerPage;
