import Background from "@/components/v2/layout/Background";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";

/**
 * Page shell for everything under /blog. Mirrors the homepage chrome (same
 * background, navbar, footer, dark scope) so blog pages feel native, but leaves
 * <Head>/SEO to each page since titles differ per route.
 */
const BlogLayout = ({ children }) => {
  return (
    <div className="dark relative min-h-screen overflow-x-clip bg-ln-bg text-ln-text antialiased selection:bg-ln-blue/30 selection:text-white">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
