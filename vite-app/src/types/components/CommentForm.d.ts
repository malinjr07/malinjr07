import React from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface CommentFormProps {
  // Add any props if the component accepts any
}

// Export the main component type
declare const CommentForm: React.FC<CommentFormProps>;

export default CommentForm;

export type { FormData, CommentFormProps };
