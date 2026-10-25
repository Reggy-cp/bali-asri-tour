import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { MAIN_NAVIGATION, CONTACT_INFO } from '@/data/navigation';

describe('Foundation Navigation & Metadata', () => {
  it('contains verified contact metadata matching Milestone 1 inspection', () => {
    expect(CONTACT_INFO.whatsappNumber).toBe('6281703734836');
    expect(CONTACT_INFO.email).toBe('info@baliasritour.com');
    expect(CONTACT_INFO.licenseNumber).toContain('2712210002034');
  });

  it('contains all core tour and car hire navigation categories', () => {
    const labels = MAIN_NAVIGATION.map((item) => item.label);
    expect(labels).toContain('HOME');
    expect(labels).toContain('BOOK A CAR');
    expect(labels).toContain('BOOK A TOURS');
    expect(labels).toContain('GALLERY');
    expect(labels).toContain('INFO');
    expect(labels).toContain('CONTACT');
  });

  it('renders SiteHeader with brand name and contact links', () => {
    render(<SiteHeader />);
    expect(screen.getAllByText(/Bali Asri/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CONTACT/i).length).toBeGreaterThan(0);
  });

  it('renders SiteFooter with contact info, quick links, and copyright', () => {
    render(<SiteFooter />);
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
    expect(screen.getByText(/We Accept/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
