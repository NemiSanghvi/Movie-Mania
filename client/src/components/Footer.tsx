import { Font2 } from "./styledComponents/ContextBodyStyleComponents";
import { CopyWrite, FooterBg } from "./styledComponents/FooterStyleComponent";
import githubIcon from '../assets/github.svg'

const Footer = () => {
  return (
    <>
      <FooterBg>
        <CopyWrite>
          <Font2>
            @2023 Movie Mania.{" "}
            <span className="text-slate-600">
              <br />
              Open source project . Feel free to contribute.
            </span>
          </Font2>{" "}
          <a href="https://github.com/RaiYashPramod/MM_Client" rel="noreffer noopenner" target="_blank"><img src={githubIcon} alt="GITHUB"/></a>
        </CopyWrite>
      </FooterBg>
    </>
  );
};

export default Footer;
