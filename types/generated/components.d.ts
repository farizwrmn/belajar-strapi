import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingPageRoleSection extends Schema.Component {
  collectionName: 'components_landing_page_role_sections';
  info: {
    displayName: 'roleSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    roleCards: Attribute.Component<'cards.role-card', true> &
      Attribute.Required;
  };
}

export interface LandingPageHeroSection extends Schema.Component {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    downloadBtn: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LandingPageFlowEnumeric extends Schema.Component {
  collectionName: 'components_landing_page_flow_enumerics';
  info: {
    displayName: 'flowEnumeric';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface LandingPageBentoBox2 extends Schema.Component {
  collectionName: 'components_components_bento_box2s';
  info: {
    displayName: 'flowSection';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    flowEnumeric: Attribute.Component<'landing-page.flow-enumeric', true> &
      Attribute.Required;
  };
}

export interface LandingPageBentoBox extends Schema.Component {
  collectionName: 'components_components_bento_boxes';
  info: {
    displayName: 'benefitSection';
    description: '';
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    benefitCard: Attribute.Component<'landing-page.benefit-card', true> &
      Attribute.Required;
  };
}

export interface LandingPageBenefitCard extends Schema.Component {
  collectionName: 'components_landing_page_benefit_cards';
  info: {
    displayName: 'benefitCard';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsPhill extends Schema.Component {
  collectionName: 'components_compontents_phills';
  info: {
    displayName: 'Phill';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsBentoBox3 extends Schema.Component {
  collectionName: 'components_components_bento_box3s';
  info: {
    displayName: 'BentoBox3';
  };
  attributes: {
    numeric: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface CardsRoleCard extends Schema.Component {
  collectionName: 'components_cards_role_cards';
  info: {
    displayName: 'Role Card';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    roles: Attribute.Component<'components.phill', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-page.role-section': LandingPageRoleSection;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.flow-enumeric': LandingPageFlowEnumeric;
      'landing-page.bento-box2': LandingPageBentoBox2;
      'landing-page.bento-box': LandingPageBentoBox;
      'landing-page.benefit-card': LandingPageBenefitCard;
      'components.phill': ComponentsPhill;
      'components.bento-box3': ComponentsBentoBox3;
      'cards.role-card': CardsRoleCard;
    }
  }
}
