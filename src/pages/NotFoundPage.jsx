import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-primary-900/10 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Button to="/" variant="primary" icon={Home} iconPosition="left">
              Go Home
            </Button>
            <Button onClick={() => window.history.back()} variant="outline" icon={ArrowLeft} iconPosition="left">
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default NotFoundPage;
