

function encodeURIAll(text) {
  return encodeURIComponent(text).replace(/[!'()~*]/g, (c) => {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
