import { getServiceSchema } from '@/lib/serviceSchemas';

export default function ServiceSchema({ path }) {
  const schema = getServiceSchema(path);

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
