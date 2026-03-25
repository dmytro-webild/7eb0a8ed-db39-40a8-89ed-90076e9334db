"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "product",
        },
        {
          name: "Reviews",
          id: "testimonial",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Le Diamant Bistro 59"
      button={{
        text: "Book Your Table",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Cozy Elegance Meets Unforgettable Flavor"
      description="Where every meal becomes a cherished memory Join guests who call Le Diamant their favorite escape in the city"
      buttons={[
        {
          text: "Book Your Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157833.jpg"
      imageAlt="Elegant interior of Le Diamant Bistro 59 with soft lighting and set tables."
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Our Story: A Taste of European Charm"
      description="Le Diamant Bistro 59 offers a culinary journey inspired by classic European traditions, served in a cozy and intimate setting. We believe in exceptional ingredients and creating cherished memories around the table."
      metrics={[
        {
          value: "15+",
          title: "Years of Culinary Excellence",
        },
        {
          value: "50+",
          title: "Award-Winning Dishes",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cook-cutting-roasted-meat-wooden-board_23-2148040262.jpg"
      imageAlt="Chef preparing a gourmet dish in a modern kitchen."
      mediaAnimation="opacity"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "dish-1",
          name: "Canard à l'Orange",
          price: "329 DKK",
          variant: "Classic French",
          imageSrc: "http://img.b2bpic.net/free-photo/sliced-vegetables-white-plate_1304-4032.jpg",
          imageAlt: "Roasted duck with orange sauce, elegantly plated.",
        },
        {
          id: "dish-2",
          name: "Mousse au Chocolat",
          price: "95 DKK",
          variant: "Rich Dessert",
          imageSrc: "http://img.b2bpic.net/free-photo/slice-honey-cake-with-figs-confiture_114579-16610.jpg",
          imageAlt: "Decadent chocolate mousse with berry garnish.",
        },
        {
          id: "dish-3",
          name: "Plateau de Fruits de Mer",
          price: "450 DKK",
          variant: "Fresh Seafood",
          imageSrc: "http://img.b2bpic.net/free-photo/mixed-fried-fish-with-lemon_140725-1064.jpg",
          imageAlt: "Assortment of fresh seafood on ice, presented beautifully.",
        },
        {
          id: "dish-4",
          name: "Tarte Tatin",
          price: "85 DKK",
          variant: "French Apple Tart",
          imageSrc: "http://img.b2bpic.net/free-photo/pancake-breakfast_1203-9049.jpg",
          imageAlt: "Caramelized apple tart with a scoop of vanilla ice cream.",
        },
      ]}
      title="Our Signature Dishes"
      description="Experience the culinary artistry of Le Diamant Bistro 59 with our chef's special recommendations, crafted to delight every palate."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      carouselMode="auto"
      uniformGridCustomHeightClasses="min-h-95 2xl:min-h-105"
      testimonials={[
        {
          id: "1",
          name: "Lars Nielsen",
          role: "Regular Guest",
          company: "Copenhagen",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-elderly-businessman-man-restaurant-senior-black-suit_1157-46610.jpg",
        },
        {
          id: "2",
          name: "Sophie Dubois",
          role: "Food Critic",
          company: "Tasteful Travel",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lady-with-bright-makeup-long-wavy-hair-smiling-with-closed-eyes-stylish-appartment_291650-578.jpg",
        },
        {
          id: "3",
          name: "Frederik & Clara",
          role: "Date Night",
          company: "Local Residents",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-bar-laughing-with-beer_23-2147681002.jpg",
        },
        {
          id: "4",
          name: "Anna Jensen",
          role: "Business Dinner Host",
          company: "Nordic Innovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-flirting-woman-dressed-white-printed-dress-romantic-style-posing-street-cafe-sunny-day_285396-7943.jpg",
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our beloved patrons who have made Le Diamant Bistro 59 their favorite dining destination."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "How do I make a reservation?",
          content: "You can easily make a reservation through our website's booking form, or by calling us directly during opening hours.",
        },
        {
          id: "faq-2",
          title: "Do you accommodate dietary restrictions?",
          content: "Yes, we are happy to accommodate most dietary restrictions and allergies. Please inform us when making your reservation or upon arrival.",
        },
        {
          id: "faq-3",
          title: "What are your operating hours?",
          content: "Le Diamant Bistro 59 is open for dinner Tuesday to Saturday from 5:00 PM to 10:00 PM. We are closed on Sundays and Mondays.",
        },
        {
          id: "faq-4",
          title: "Can I see the full menu online?",
          content: "Our current menu is available on our website under the 'Menu' section. We update it seasonally to ensure the freshest ingredients.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common inquiries about reservations, menu, and your dining experience at Le Diamant."
      faqsAnimation="slide-up"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Unforgettable Evening"
      description="Reserve your table at Le Diamant Bistro 59 for an exquisite dining experience. We look forward to welcoming you."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "date",
          type: "date",
          placeholder: "Date",
          required: true,
        },
        {
          name: "guests",
          type: "number",
          placeholder: "Number of Guests",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Special Requests (optional)",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/rustic-restaurant-furniture-restaurant_53876-16490.jpg"
      imageAlt="Cozy and elegant interior of Le Diamant Bistro 59, ready for guests."
      mediaAnimation="opacity"
      mediaPosition="left"
      buttonText="Confirm Reservation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Menu",
              href: "#product",
            },
            {
              label: "Reviews",
              href: "#testimonial",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Reservations",
              href: "#contact",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Le Diamant Bistro 59"
      copyrightText="© 2025 Le Diamant Bistro 59"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
