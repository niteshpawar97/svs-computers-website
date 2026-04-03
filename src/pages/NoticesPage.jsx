import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '@components/seo/SEO';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';
import { notices } from '@data/notices';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import { Pin, Calendar } from 'lucide-react';

function NoticesPage() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'admission', 'exam', 'event', 'general'];

  const filtered = filter === 'all' ? notices : notices.filter(n => n.category === filter);
  const sorted = [...filtered].sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0) || new Date(b.date) - new Date(a.date));

  const categoryColors = {
    admission: 'success',
    exam: 'warning',
    event: 'accent',
    general: 'neutral',
  };

  return (
    <>
      <SEO
        title="Notice Board - Latest News & Announcements"
        description="Latest notices, announcements, exam schedules and events at SVS Computers Chhindwara. Stay updated with admissions, results and important dates."
        path="/notices"
      />
      <PageBanner
        title="Notice Board"
        subtitle="Stay updated with the latest announcements and news."
        breadcrumbs={[{ label: 'Notices' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === cat ? 'bg-primary-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {sorted.map((notice) => (
              <motion.div key={notice.id} variants={fadeUp}>
                <Card padding="lg" className={notice.isPinned ? 'border-l-4 border-l-accent' : ''}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {notice.isPinned && <Pin className="w-4 h-4 text-accent" />}
                        <Badge variant={categoryColors[notice.category] || 'neutral'} size="sm">
                          {notice.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">{notice.title}</h3>
                      <p className="text-gray-600 text-sm">{notice.content}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs whitespace-nowrap shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default NoticesPage;
