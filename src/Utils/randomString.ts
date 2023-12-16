import ShortUniqueId from "short-unique-id";

const randomStringFunc = () => {
  let randomString = new ShortUniqueId({ length: 8 });
  return randomString.rnd().toString();
};
export default randomStringFunc;
