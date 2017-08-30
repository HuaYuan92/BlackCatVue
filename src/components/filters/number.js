export default function (val) {
  return (val || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
