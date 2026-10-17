import { redirect, notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

const CATEGORY_MAP: Record<string, string> = {
  blogs: '/blogs/',
  'bali-day-tours': '/bali-day-tours/',
  'bali-experience': '/bali-experience-tours/',
  'beyond-bali-trips': '/beyond-bali-trips/',
  'bali-yoga-tours': '/bali-yoga-tours/',
  'bali-promo': '/bali-promo/',
  'bali-tour-packages': '/bali-tour-package/',
  'honeymoon-package': '/bali-honeymoon-packages/',
  test: '/bali-tour-package/',
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({ slug }));
}

export default async function CategoryRedirectPage({ params }: Props) {
  const { slug } = await params;
  const target = CATEGORY_MAP[slug];

  if (!target) {
    notFound();
  }

  redirect(target);
}
