import Container from "@/components/v2/ui/Container";
import SocialLinks from "@/components/v2/ui/SocialLinks";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/5 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} Karthik Vanam. Crafted with care.
          </p>
        </div>
        <SocialLinks size="sm" />
      </Container>
    </footer>
  );
};

export default Footer;
