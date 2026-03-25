'use client';

import { useEffect } from 'react';

/**
 * Schema Component - Injects structured data (Schema.org) into the page head
 * @param {Object} schema - The schema object to inject
 */
const Schema = ({ schema }) => {
  useEffect(() => {
    if (!schema) return;

    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'schema-structured-data';

    // Remove existing schema script if present
    const existingScript = document.getElementById('schema-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('schema-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);

  return null; // This component doesn't render anything
};

export default Schema;
