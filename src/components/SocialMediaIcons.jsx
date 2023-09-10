const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/utkarsh-singh-tiwari-617139242/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Utkarsh99999/Utkarsh99999/tree/main"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" style={{borderRadius:'50%'}} height={38} width={38} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/uttkarsh.singhtiwari"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/mad__max__999/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

       <a
        className="hover:opacity-50 transition duration-500"
        href="assets/Utkarsh_CV.pdf"
        target="_blank"
        rel="noreferrer"
        download='Utkarsh_CV.pdf'
      >
        <img alt="resume-link" className="invert" src="../assets/resume.png" height={30} width={30}/>
      </a>
      
    </div>
  );
};

export default SocialMediaIcons;
