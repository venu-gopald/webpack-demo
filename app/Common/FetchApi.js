import fetch from 'isomorphic-fetch';

const fetchGet = (url) => {
  fetch(url)
    .then(resp => resp.json())
    .catch(error => error);
};


const fetchPost = (url, postData) => {
  const headerData = new Headers();
  headerData.user = 'XYZ';

  const request = new Request(url, {
    method: 'POST',
    body: postData,
    headers: headerData,
  });

  fetch(request)
    .then(resp => resp.json())
    .catch(error => error);
};

export { fetchGet, fetchPost };
