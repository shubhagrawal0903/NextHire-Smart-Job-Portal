import type { Appearance } from "@clerk/types";

export const clerkAppearance: Appearance = {
  baseTheme: undefined, // Using custom theme instead of predefined ones
  variables: {
    // Color scheme matching your purple-blue gradient design
    colorPrimary: "#7c3aed", // Purple-600
    colorDanger: "#ef4444", // Red-500
    colorSuccess: "#10b981", // Emerald-500
    colorWarning: "#f59e0b", // Amber-500
    colorNeutral: "#6b7280", // Gray-500
    colorText: "#ffffff", // White text
    colorTextOnPrimaryBackground: "#ffffff",
    colorTextSecondary: "#d1d5db", // Gray-300
    colorBackground: "#0f172a", // Slate-900 - dark background
    colorInputBackground: "rgba(30, 41, 59, 0.8)", // Slate-800 with opacity
    colorInputText: "#ffffff",
    
    // Border and shadow colors
    borderRadius: "12px", // Rounded-xl to match your design
    
    // Fonts
    fontFamily: '"Inter", system-ui, sans-serif',
    fontFamilyButtons: '"Inter", system-ui, sans-serif',
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Spacing
    spacingUnit: "1rem",
  },
  elements: {
    // Root container
    rootBox: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #312e81 0%, #1e3a8a 50%, #1e1b4b 100%)", // Reversed gradient for lighter feel
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem", // Reduced padding
    },
    
    // Main card container
    card: {
      background: "rgba(30, 41, 59, 0.9)", // Lighter dark background
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(139, 92, 246, 0.4)", // Slightly more visible purple border
      borderRadius: "16px", // Smaller border radius
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(124, 58, 237, 0.3)",
      padding: "1.5rem", // Reduced padding
      minWidth: "320px", // Smaller minimum width
      maxWidth: "380px", // Smaller maximum width
      width: "100%",
      margin: "1rem", // Add margin to prevent edge touching
    },
    
    // Header with logo area
    headerTitle: {
      color: "transparent",
      background: "linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)", // Cyan-purple-pink gradient
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      fontSize: "1.75rem", // Smaller title
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "0.75rem", // Reduced margin
    },
    
    headerSubtitle: {
      color: "#d1d5db", // Gray-300
      textAlign: "center",
      fontSize: "0.875rem", // Smaller subtitle
      marginBottom: "1.5rem", // Reduced margin
      fontWeight: "400",
    },
    
    // Form elements
    formButtonPrimary: {
      background: "linear-gradient(135deg, #2563eb, #7c3aed)", // Blue-purple gradient
      color: "#ffffff",
      border: "none",
      borderRadius: "10px", // Slightly smaller radius
      padding: "0.625rem 1.25rem", // Reduced padding
      fontSize: "0.875rem", // Smaller font
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.4)",
      "&:hover": {
        background: "linear-gradient(135deg, #1d4ed8, #6d28d9)",
        transform: "translateY(-1px)",
        boxShadow: "0 6px 20px 0 rgba(37, 99, 235, 0.6)",
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },
    
    formButtonSecondary: {
      background: "transparent",
      color: "#a78bfa", // Purple-300
      border: "1px solid rgba(139, 92, 246, 0.4)",
      borderRadius: "10px", // Smaller radius
      padding: "0.625rem 1.25rem", // Reduced padding
      fontSize: "0.875rem", // Smaller font
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        background: "rgba(139, 92, 246, 0.1)",
        borderColor: "rgba(139, 92, 246, 0.6)",
      },
    },
    
    // Input fields
    formFieldInput: {
      background: "rgba(30, 41, 59, 0.8)", // Slate-800 with opacity
      border: "1px solid rgba(99, 102, 241, 0.3)", // Indigo border
      borderRadius: "10px", // Smaller radius
      color: "#ffffff",
      padding: "0.75rem 0.875rem", // Reduced padding
      fontSize: "0.875rem", // Smaller font
      transition: "all 0.2s ease",
      "&:focus": {
        outline: "none",
        borderColor: "#7c3aed", // Purple-600
        boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.1)",
        background: "rgba(30, 41, 59, 1)",
      },
      "&::placeholder": {
        color: "#9ca3af", // Gray-400
      },
    },
    
    formFieldLabel: {
      color: "#d1d5db", // Gray-300
      fontSize: "0.8rem", // Smaller label
      fontWeight: "500",
      marginBottom: "0.375rem", // Reduced margin
    },
    
    // Links and text
    footerActionLink: {
      color: "#8b5cf6", // Purple-500
      textDecoration: "none",
      fontWeight: "500",
      "&:hover": {
        color: "#a78bfa", // Purple-400
        textDecoration: "underline",
      },
    },
    
    footerActionText: {
      color: "#9ca3af", // Gray-400
    },
    
    // Social buttons (Google, etc.)
    socialButtonsBlockButton: {
      background: "rgba(30, 41, 59, 0.8)",
      border: "1px solid rgba(99, 102, 241, 0.3)",
      borderRadius: "12px",
      color: "#ffffff",
      padding: "0.75rem",
      transition: "all 0.2s ease",
      "&:hover": {
        background: "rgba(30, 41, 59, 1)",
        borderColor: "rgba(99, 102, 241, 0.5)",
      },
    },
    
    socialButtonsBlockButtonText: {
      color: "#ffffff",
      fontWeight: "500",
    },
    
    // Divider
    dividerLine: {
      background: "rgba(139, 92, 246, 0.2)",
    },
    
    dividerText: {
      color: "#9ca3af", // Gray-400
      fontSize: "0.875rem",
    },
    
    // Alert messages
    alertText: {
      color: "#fecaca", // Red-200 for errors
      fontSize: "0.875rem",
    },
    
    // Loading spinner
    spinner: {
      color: "#8b5cf6", // Purple-500
    },
    
    // Form field error state
    formFieldInputShowPasswordButton: {
      color: "#9ca3af",
      "&:hover": {
        color: "#d1d5db",
      },
    },
    
    // User button (for when signed in)
    userButtonBox: {
      width: "40px",
      height: "40px",
    },
    
    userButtonAvatarBox: {
      width: "40px",
      height: "40px",
      border: "2px solid rgba(139, 92, 246, 0.5)",
      borderRadius: "50%",
    },
    
    userButtonPopoverCard: {
      background: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(139, 92, 246, 0.3)",
      borderRadius: "16px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.2)",
    },
    
    userButtonPopoverText: {
      color: "#ffffff",
    },
    
    userButtonPopoverActionButton: {
      color: "#d1d5db",
      "&:hover": {
        background: "rgba(139, 92, 246, 0.1)",
        color: "#ffffff",
      },
    },
  },
  
  layout: {
    logoImageUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/061/846/small/job-logo-design-job-search-icon-with-magnifying-glass-choose-people-for-hire-symbol-job-or-employee-logo-free-vector.jpg",
    logoLinkUrl: "/",
    showOptionalFields: true,
    socialButtonsPlacement: "top",
    socialButtonsVariant: "blockButton",
  },
};