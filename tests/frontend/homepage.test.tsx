import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import HomePage from '@/app/page';
import HeroSection from '@/components/sections/HeroSection';
import TourGrid from '@/components/tours/TourGrid';
import { FEATURED_TOURS } from '@/data/tours';
import ContactForm from '@/components/forms/ContactForm';

describe('Milestone 4 — Homepage Components', () => {
  it('renders HeroSection with title and TripAdvisor badge', () => {
    render(<HeroSection />);
    expect(screen.getByText(/5.0 Star Rated on TripAdvisor/i)).toBeInTheDocument();
    expect(screen.getByText(/Browse Tour Packages/i)).toBeInTheDocument();
    expect(screen.getByText(/Instant WhatsApp Inquiry/i)).toBeInTheDocument();
  });

  it('renders TourGrid and filters tours by category', () => {
    render(<TourGrid tours={FEATURED_TOURS} showFilters={true} />);
    expect(screen.getByRole('heading', { name: /10 Days 9 Nights Bali Tour Packages/i })).toBeInTheDocument();

    // Click on 1-Day Highlights filter tab
    const dayTourTab = screen.getByRole('button', { name: /1-Day Highlights/i });
    fireEvent.click(dayTourTab);

    // Expect day tour to be visible
    expect(screen.getByRole('heading', { name: /Sunrise Jeep Tour/i })).toBeInTheDocument();
  });

  it('renders ContactForm and displays validation errors for empty submissions', async () => {
    render(<ContactForm />);
    const submitBtn = screen.getByRole('button', { name: /Send Inquiry Form/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  it('renders entire HomePage with live popular tours and reviews summary', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /Sunrise Jeep Tour/i })).toBeInTheDocument();
    expect(screen.getByText(/Car Hire Bali with Driver/i)).toBeInTheDocument();
    expect(screen.getByText(/Review & Gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/1,192 reviews/i)).toBeInTheDocument();
  });
});
