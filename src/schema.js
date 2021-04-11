const Joi = require('joi');

const RequestAddSchema = Joi.object({
  name: Joi.string().min(3).max(60).empty()
    .required()
    .messages({
      'string.min': 'Nama buku diisi minimal {#limit} karakter..',
      'string.max': 'Nama buku harus diisi maksimal {#limit} karakter..',
      'string.empty': 'Gagal menambahkan buku. Mohon isi nama buku',
      'any.required': 'Gagal menambahkan buku. Mohon isi nama buku',
    }),
  year: Joi.number().integer().min(1600).max(2021),
  author: Joi.string().min(3).max(30).required(),
  summary: Joi.string().min(4).max(255).required(),
  publisher: Joi.string().min(3).max(80).required(),
  pageCount: Joi.number().integer().min(1).max(10000),
  readPage: Joi.number().integer().min(0).max(Joi.ref('pageCount'))
    .message({
      'number.max': 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }),
  reading: Joi.boolean().required(),
});

const RequestEditSchema = Joi.object({
  name: Joi.string().min(3).max(60).empty()
    .required()
    .messages({
      'string.min': 'Nama buku diisi minimal {#limit} karakter..',
      'string.max': 'Nama buku harus diisi maksimal {#limit} karakter..',
      'string.empty': 'Gagal memperbarui buku. Mohon isi nama buku',
      'any.required': 'Gagal memperbarui buku. Mohon isi nama buku',
    }),
  year: Joi.number().integer().min(1600).max(2021),
  author: Joi.string().min(3).max(30).required(),
  summary: Joi.string().min(4).max(255).required(),
  publisher: Joi.string().min(3).max(80).required(),
  pageCount: Joi.number().integer().min(1).max(10000),
  readPage: Joi.number().integer().min(0).max(Joi.ref('pageCount'))
    .message({
      'number.max': 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }),
  reading: Joi.boolean().required(),
});

const ParamIdSchema = Joi.object({
  id: Joi.string().required(),
});

const QuerySchema = Joi.object({
  name: Joi.string().min(3),
  reading: Joi.number().integer().min(0).max(1),
  finished: Joi.number().integer().min(0).max(1),
});

module.exports = {
  RequestAddSchema,
  RequestEditSchema,
  ParamIdSchema,
  QuerySchema,
};
