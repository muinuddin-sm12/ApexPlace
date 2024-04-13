const Footer = () => {
  return (
    <div className=" w-full bg-base-200">
      <footer className="max-w-[1440px] mx-auto  footer p-10 md:px-[135px] text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Management</a>
    <a className="link link-hover">Leasing</a>
    <a className="link link-hover">Advisory</a>
    <a className="link link-hover">Development</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@gmail.com" className="input input-bordered join-item" /> 
        <button className="btn bg-sky-400 text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  );
};

export default Footer;
