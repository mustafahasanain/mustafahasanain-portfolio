import { describe, it, expect } from 'vitest';
import { contactFormSchema, ContactFormValues } from './contact';

describe('contactFormSchema', () => {
  describe('fullName validation', () => {
    it('should accept valid names', () => {
      const validNames = [
        'John Doe',
        "O'Brien",
        'Mary-Jane',
        'Jean-Pierre',
        'Al Hassan',
      ];

      validNames.forEach((name) => {
        const result = contactFormSchema.safeParse({
          fullName: name,
          email: 'test@example.com',
          phone: '+1234567890',
          message: 'This is a test message',
          contactConsent: true,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject names shorter than 2 characters', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'A',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Full name must be at least 2 characters'
        );
      }
    });

    it('should reject names longer than 100 characters', () => {
      const longName = 'A'.repeat(101);
      const result = contactFormSchema.safeParse({
        fullName: longName,
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Full name must not exceed 100 characters'
        );
      }
    });

    it('should reject names with invalid characters', () => {
      const invalidNames = ['John123', 'Test@User', 'Name#1'];

      invalidNames.forEach((name) => {
        const result = contactFormSchema.safeParse({
          fullName: name,
          email: 'test@example.com',
          phone: '+1234567890',
          message: 'This is a test message',
          contactConsent: true,
        });

        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('Please enter a valid name');
        }
      });
    });
  });

  describe('email validation', () => {
    it('should accept valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@example.co.uk',
        'user+tag@example.com',
        'user_123@test-domain.com',
      ];

      validEmails.forEach((email) => {
        const result = contactFormSchema.safeParse({
          fullName: 'John Doe',
          email,
          phone: '+1234567890',
          message: 'This is a test message',
          contactConsent: true,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject empty email', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: '',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Email is required');
      }
    });

    it('should reject invalid email formats', () => {
      const invalidEmails = [
        'notanemail',
        'missing@domain',
        '@nodomain.com',
        'spaces in@email.com',
      ];

      invalidEmails.forEach((email) => {
        const result = contactFormSchema.safeParse({
          fullName: 'John Doe',
          email,
          phone: '+1234567890',
          message: 'This is a test message',
          contactConsent: true,
        });

        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe(
            'Please enter a valid email address'
          );
        }
      });
    });
  });

  describe('companyName validation', () => {
    it('should accept optional company name', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
        companyName: 'Acme Corp',
      });

      expect(result.success).toBe(true);
    });

    it('should accept empty company name', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
        companyName: '',
      });

      expect(result.success).toBe(true);
    });

    it('should reject company names longer than 100 characters', () => {
      const longCompanyName = 'A'.repeat(101);
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
        companyName: longCompanyName,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Company name must not exceed 100 characters'
        );
      }
    });
  });

  describe('phone validation', () => {
    it('should accept valid international phone numbers', () => {
      const validPhones = [
        '+1234567890',
        '+441234567890',
        '+905551234567',
        '+966501234567',
      ];

      validPhones.forEach((phone) => {
        const result = contactFormSchema.safeParse({
          fullName: 'John Doe',
          email: 'test@example.com',
          phone,
          message: 'This is a test message',
          contactConsent: true,
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject empty phone number', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Phone number is required');
      }
    });

    it('should reject phone numbers that are too short', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '1', // only 1 digit, needs at least 2
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Please enter a valid phone number with country code'
        );
      }
    });

    it('should reject phone numbers with letters', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: 'abcdefghij',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Please enter a valid phone number with country code'
        );
      }
    });

    it('should reject phone numbers starting with 0', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '0000000000',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Please enter a valid phone number with country code'
        );
      }
    });
  });

  describe('message validation', () => {
    it('should accept valid messages', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message that is long enough',
        contactConsent: true,
      });

      expect(result.success).toBe(true);
    });

    it('should reject messages shorter than 10 characters', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'Short',
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Message must be at least 10 characters'
        );
      }
    });

    it('should reject messages longer than 1000 characters', () => {
      const longMessage = 'A'.repeat(1001);
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: longMessage,
        contactConsent: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Message must not exceed 1000 characters'
        );
      }
    });
  });

  describe('contactConsent validation', () => {
    it('should accept when consent is true', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: true,
      });

      expect(result.success).toBe(true);
    });

    it('should reject when consent is false', () => {
      const result = contactFormSchema.safeParse({
        fullName: 'John Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        message: 'This is a test message',
        contactConsent: false,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Please confirm that we can contact you.'
        );
      }
    });
  });

  describe('complete form validation', () => {
    it('should accept a complete valid form', () => {
      const validForm: ContactFormValues = {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        companyName: 'Acme Corp',
        phone: '+1234567890',
        message: 'I would like to discuss a project with you.',
        contactConsent: true,
      };

      const result = contactFormSchema.safeParse(validForm);
      expect(result.success).toBe(true);
    });

    it('should collect multiple validation errors', () => {
      const invalidForm = {
        fullName: 'A',
        email: 'invalid-email',
        phone: '123',
        message: 'Short',
        contactConsent: false,
      };

      const result = contactFormSchema.safeParse(invalidForm);
      expect(result.success).toBe(false);
      if (!result.success) {
        // Should have multiple errors
        expect(result.error.issues.length).toBeGreaterThan(1);
      }
    });
  });
});
