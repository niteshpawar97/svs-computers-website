import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';
import SEO from '@components/seo/SEO';
import { blogPosts } from '@data/blogPosts';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

function BlogPage() {
  return (
    <>
      <SEO
        title="Blog - Computer Education Articles & Career Guides"
        description="Read expert articles on computer courses, career guidance, BCA, PGDCA, DCA, Tally, CPCT exam tips and IT career options in Chhindwara. SVS Computers Blog."
        path="/blog"
      />

      <PageBanner
        title="Blog & Articles"
        subtitle="Expert guidance on computer education, career tips, and course information."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <Card className="h-full flex flex-col group" padding="lg">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="accent">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Date & Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default BlogPage;
