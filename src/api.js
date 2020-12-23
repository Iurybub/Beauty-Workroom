// Base URL

const base_url = 'http://127.0.0.1:8000/api/services';

const comsetology = '/cosmetology';
const meditation = '/meditation';
const cosmetics = '/cosmetics';
const details = '/details/';
const form = '/contact/';

// Services list urls:
export const CosmetologyListURL = () =>  `${base_url}${comsetology}`;
export const MeditationListURL = () =>  `${base_url}${meditation}`;
export const CosmeticsListURL = () =>  `${base_url}${cosmetics}`;
export const FormURL = () =>  `${base_url}${form}`;


//Service detail url:
export const DetailURL = (service_id) => `${base_url}${details}${service_id}`;
export const listURL = (type_of) => `${base_url}/${type_of}`;
