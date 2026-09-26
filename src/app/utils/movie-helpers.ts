import { apiConfig } from './api-config';

export function getImageUrl(path: string | null, size: string): string {
  return path ? `${apiConfig.imageUrl}${size}${path}` : 'https://placehold.co/500x750?text=Sin+imagen';
}

export function formatRuntime(minutes: number): string {
  if (!minutes) {
    return 'N/A';
  }
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}