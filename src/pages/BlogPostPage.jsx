import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';
import Button from '@components/ui/Button';
import SEO from '@components/seo/SEO';
import { blogPosts } from '@data/blogPosts';
import { fadeUp, viewportConfig } from '@lib/animations';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEO title="Post Not Found" noindex />
        <PageBanner title="Post Not Found" breadcrumbs={[{ label: 'Blog', path: '/blog' }, { label: 'Not Found' }]} />
        <section className="section-padding bg-white">
          <Container className="text-center">
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Button to="/blog" variant="primary" icon={ArrowLeft} iconPosition="left">Back to Blog</Button>
          </Container>
        </section>
      </>
    );
  }

  // Related posts (same category, exclude current)
  const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);

  // Convert markdown-like content to HTML sections
  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-primary-900 mt-10 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold text-primary-900 mt-8 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*(.*)$/);
        if (match) {
          return <li key={i} className="flex gap-2 mb-2 text-gray-700"><span className="text-accent mt-1.5 shrink-0">•</span><span><strong className="text-primary-900">{match[1]}</strong>{match[2]}</span></li>;
        }
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="flex gap-2 mb-1.5 text-gray-700"><span className="text-accent mt-1.5 shrink-0">•</span><span>{line.replace('- ', '')}</span></li>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-semibold text-primary-900 mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.startsWith('| ')) {
        return null; // Skip table rows (simplified)
      }
      if (line.trim() === '') {
        return <div key={i} className="h-3" />;
      }
      // Bold text within paragraph
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-2">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-primary-900">{part.replace(/\*\*/g, '')}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  // JSON-LD structured data for blog post
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'SVS Computers' },
    publisher: {
      '@type': 'Organization',
      name: 'SVS Computers',
      url: 'https://svscomputers.co.in',
    },
    mainEntityOfPage: `https://svscomputers.co.in/blog/${post.slug}`,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      >
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SEO>

      <PageBanner
        title={post.title}
        breadcrumbs={[{ label: 'Blog', path: '/blog' }, { label: post.category }]}
      />

      <section className="section-padding bg-white">
        <Container size="md">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <Badge variant="accent">{post.category}</Badge>
              <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Content */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-gray-100">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </motion.article>

          {/* CTA */}
          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Interested in Our Courses?</h3>
            <p className="text-gray-300 mb-6">Join SVS Computers Chhindwara and start your IT career today.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/admissions" variant="accent">Apply Now</Button>
              <Button href="tel:+919425146970" variant="outline-white">Call 9425146970</Button>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`}>
                    <Card className="group" padding="lg">
                      <Badge variant="neutral" size="sm">{rp.category}</Badge>
                      <h4 className="text-lg font-semibold text-primary-900 mt-3 mb-2 group-hover:text-accent transition-colors">{rp.title}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{rp.excerpt}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="text-center mt-10">
            <Button to="/blog" variant="outline" icon={ArrowLeft} iconPosition="left">
              All Articles
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BlogPostPage;
