/**
 * utils/response.js
 * Standardised HTTP response helpers.
 */

export const ok = (res, data, statusCode = 200) =>
  res.status(statusCode).json({ success: true, ...data });

export const fail = (res, message, statusCode = 400, extra = {}) =>
  res.status(statusCode).json({ success: false, error: message, ...extra });
