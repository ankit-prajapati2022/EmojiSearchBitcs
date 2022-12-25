const api = "https://emoji-api.com/";
const accessKey = "8094609289d4e0bb41ce48592ca453a4b92baab2";

export const getEmojiBySearch = async (search) => {
  const response = await fetch(
    `${api}emojis?search=${search}&access_key=${accessKey}`
  );
  const data = await response.json();
  return data;
};

export const getEmojiByName = async (name) => {
  const response = await fetch(`${api}emojis/${name}?access_key=${accessKey}`);
  const data = await response.json();
  return data;
};

export const getEmojiCategories = async () => {
  const response = await fetch(`${api}categories?access_key=${accessKey}`);
  const data = await response.json();
  return data;
};

export const getEmojiByCategory = async (category) => {
  const response = await fetch(
    `${api}categories/${category}?access_key=${accessKey}`
  );
  const data = await response.json();
  return data;
};
