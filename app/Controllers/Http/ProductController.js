'use strict'

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single product.
   * GET products/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductController
