"use client";
import React, { Suspense } from 'react';
const HomeContent = React.lazy(() => import('./HomeContent'));

export default function Home() {
  return (
    <Suspense fallback={<div style={{color:'#fff'}}>Loading dashboard...</div>}>
      <HomeContent />
    </Suspense>
  );
}