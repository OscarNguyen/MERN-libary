import React from 'react'

const col1 = ["FAQ", "Inverstor Relations", "Ways to view", "Corporate Information"];
const col2 = ["Help Centre", "Jobs", "Terms of Use", "Contact Us"];
const col3 = ["Account", "Redeem gift cards", "Privacy", "Speedtest"]
const col4 = ["Media Center", "Buy gift cards", "Cookie Preferences", "Legal Notices"]

const FooterInfoColumn: React.FC<{ data: string[] }> = ({ data }) => (
  <div className="info-column">
    {data.map((item, index) => (
      <a className="link" key={index}>{item}</a>
    ))}
  </div>
)

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <FooterInfoColumn data={col1} />
        <FooterInfoColumn data={col2} />
        <FooterInfoColumn data={col3} />
        <FooterInfoColumn data={col4} />
      </div>
      <p>Copyright &copy; {new Date().getFullYear()} by Minh Nguyen</p>
    </footer>
  )
}

export default Footer
