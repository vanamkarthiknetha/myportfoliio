import Container from "@/components/v2/ui/Container";
import SocialLinks from "@/components/v2/ui/SocialLinks";

const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-xs text-ln-dim">
            © {new Date().getFullYear()} Karthik Vanam. All rights reserved.
          </p>
        </div>
        <SocialLinks size="sm" />
      </Container>
    </footer>
  );
};

export default Footer;
