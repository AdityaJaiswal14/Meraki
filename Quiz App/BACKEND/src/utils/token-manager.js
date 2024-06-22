import jwt from "jsonwebtoken"

export const createToken = (id, email, expiresIn ) => {

  if (typeof id !== 'string' || typeof email !== 'string' || typeof expiresIn !== 'string') {
    throw new Error('Invalid input types. id, email, and expiresIn must be strings.');
  }
  const payload ={id, email};
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set.');
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn,
    });
    return token;
  } catch (error) {
    console.error('Error creating token:', error);
    throw error;
  }
};
