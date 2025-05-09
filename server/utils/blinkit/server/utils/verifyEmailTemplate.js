const verifyEmailTemplate = ({ name, url }) => {
  return `
    <p>Dear ${name}</p>
    <p>Thankyou for registering at blinkit.</p>
    <a href = ${url} style = "color:white;background:#071263;margin-top:10px,padding:20px">
    Verify Email</a href = ${url}>
    `;
};
export default verifyEmailTemplate;
