/**
 * Data URL configuration for CredoCarbon website
 * 
 * Files are stored in Google Cloud Storage bucket: credocarbon-metadata
 * Location: asia-south2 (Delhi)
 * 
 * To update data, use:
 * gcloud storage cp public/Data/registryData.json gs://credocarbon-metadata/
 * gcloud storage cp public/Data/insightsData.json gs://credocarbon-metadata/
 */

const GCS_BUCKET_URL = 'https://storage.googleapis.com/credocarbon-metadata';

// Use GCS for production, local files for development
const isProduction = import.meta.env.PROD;

export const DATA_URLS = {
    registryData: isProduction
        ? `${GCS_BUCKET_URL}/registryData.json`
        : '/Data/registryData.json',
    insightsData: isProduction
        ? `${GCS_BUCKET_URL}/insightsData.json`
        : '/Data/insightsData.json',
};

export default DATA_URLS;
