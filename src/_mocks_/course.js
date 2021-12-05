import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Razonamiento Logico',
  'Razonamiento Verbal',
];

const POST_DESCRIPTIONS = [
  'Sinonimos y antonimos',
  'Sinonimos y antonimos',
];


const posts = [...Array(1)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  description: POST_DESCRIPTIONS[index + 1],
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
