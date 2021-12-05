import faker from 'faker';
// utils
import { mockImgCourse } from '../utils/mockImages';

// ----------------------------------------------------------------------

const COURSE_NAME = [
  'Razonamiento Verbal',
];

const COURSE_DESCRIPTION = [
  'Sinonimos y antonimos',
];

// ----------------------------------------------------------------------

const courses = [...Array(1)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgCourse(setIndex),
    name: COURSE_NAME[index],
    description: COURSE_DESCRIPTION[index],
  };
});

export default courses;
