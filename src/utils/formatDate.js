import dayjs from 'dayjs';

const formatDate = (signatureDate) => dayjs(signatureDate).format('DD/MM/YYYY');

export default formatDate;
