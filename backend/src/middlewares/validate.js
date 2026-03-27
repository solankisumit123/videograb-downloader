/**
 * middlewares/validate.js
 * Joi-based request body/query validation factory.
 * Usage: router.post('/foo', validate(schema), controller)
 */
import Joi from 'joi';

/**
 * @param {Joi.ObjectSchema} schema
 * @param {'body'|'query'|'params'} [source='body']
 */
export function validate(schema, source = 'body') {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], { abortEarly: false, stripUnknown: true });
    if (error) {
      const details = error.details.map(d => d.message);
      return res.status(422).json({ success: false, error: 'Validation failed', details });
    }
    req[source] = value; // replace with sanitised value
    next();
  };
}

// ── Reusable schemas ──────────────────────────────────────────────────────────

export const analyzeSchema = Joi.object({
  url: Joi.string().min(3).required().messages({
    'string.min': 'Please provide a valid URL',
    'any.required': '"url" is required',
  }),
});

export const downloadSchema = Joi.object({
  url:       Joi.string().uri({ scheme: ['http', 'https'] }).required(),
  format:    Joi.string().valid('mp4', 'mp3', 'webm', 'm4a').default('mp4'),
  quality:   Joi.string().default('best'),
  formatId:  Joi.string().optional(),
  needsMerge: Joi.boolean().default(false),
});
