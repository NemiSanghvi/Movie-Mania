import { CopyWrite, FooterBg, Font3 } from "./styledComponents/FooterStyleComponent";
import githubIcon from '../assets/github.svg'

const Footer = () => {
  return (
    <>
      <FooterBg>
        <CopyWrite>
          <Font3>
            @2023 Movie Mania.{" "}
            <span className="text-slate-600">
              <br />
              Open source project. Feel free to contribute.
            </span>
          </Font3>{" "}
          <a href="https://github.com/RaiYashPramod/MM_Client" rel="noreffer noopenner" target="_blank"><img src={githubIcon} alt="GITHUB"/></a>
        </CopyWrite>
      </FooterBg>
    </>
  );
};

export default Footer;
