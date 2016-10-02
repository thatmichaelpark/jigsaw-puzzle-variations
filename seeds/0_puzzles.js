/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('puzzles').del()
    .then(() => {
      return knex('puzzles').insert([{
        id: 1,
        n_rows: 2,
        n_cols: 3,
        max_wave_depth: 20,
        piece_content_size: 200,
        max_freq: 2,
        max_v: 5,
        n_waves: 3,
        has_rotated_pieces: false,
        image_url: '/images/seattle.jpg',
        background_color: '#db9276'
      }, {
        id: 2,
        n_rows: 2,
        n_cols: 3,
        max_wave_depth: 25,
        piece_content_size: 200,
        max_freq: 5,
        max_v: 2,
        n_waves: 3,
        has_rotated_pieces: true,
        image_url: '/images/clouds-06.jpg',
        background_color: '#5979AF'
      }, {
        id: 3,
        n_rows: 4,
        n_cols: 4,
        max_wave_depth: 20,
        piece_content_size: 125,
        max_freq: 3,
        max_v: 1,
        n_waves: 2,
        has_rotated_pieces: false,
        image_url: '/images/cat701.jpeg'
      }, {
        id: 4,
        n_rows: 4,
        n_cols: 6,
        max_wave_depth: 20,
        piece_content_size: 125,
        max_freq: 3,
        max_v: 1,
        n_waves: 4,
        has_rotated_pieces: false,
        image_url: '/images/wave.jpg'
      }, {
        id: 5,
        n_rows: 6,
        n_cols: 8,
        max_wave_depth: 20,
        piece_content_size: 85,
        max_freq: 3,
        max_v: 1,
        n_waves: 2,
        has_rotated_pieces: false,
        image_url: '/images/abstract.jpg'
      }, {
        id: 6,
        n_rows: 3,
        n_cols: 5,
        max_wave_depth: 20,
        piece_content_size: 150,
        max_freq: 3,
        max_v: 1,
        n_waves: 2,
        has_rotated_pieces: true,
        image_url: '/images/fractal-026.jpg',
        background_color: '#D8780A'
      }, {
        id: 7,
        n_rows: 4,
        n_cols: 5,
        max_wave_depth: 20,
        piece_content_size: 120,
        max_freq: 3,
        max_v: 1,
        n_waves: 2,
        has_rotated_pieces: true,
        image_url: '/images/JellyBellyBeans.jpg',
        background_color: '#F2B5B5'
      }, {
        id: 8,
        n_rows: 4,
        n_cols: 6,
        max_wave_depth: 20,
        piece_content_size: 120,
        max_freq: 3,
        max_v: 1,
        n_waves: 2,
        has_rotated_pieces: true,
        image_url: '/images/jellyfish.jpg',
        background_color: '#0F74FF'
      }, {
        id: 9,
        n_rows: 5,
        n_cols: 9,
        max_wave_depth: 20,
        piece_content_size: 100,
        max_freq: 3,
        max_v: 1,
        n_waves: 3,
        has_rotated_pieces: true,
        image_url: '/images/fractal-1119594_960_720.jpg',
        background_color: '#EDD2AC'
      }, {
        id: 10,
        n_rows: 9,
        n_cols: 9,
        max_wave_depth: 10,
        piece_content_size: 60,
        max_freq: 3,
        max_v: 1,
        n_waves: 3,
        has_rotated_pieces: false,
        image_url: '/images/blank.jpg',
        background_color: '#ffffff'
      }, {
        id: 11,
        n_rows: 9,
        n_cols: 9,
        max_wave_depth: 10,
        piece_content_size: 60,
        max_freq: 3,
        max_v: 1,
        n_waves: 3,
        has_rotated_pieces: true,
        image_url: '/images/blank.jpg',
        background_color: '#ffffff'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('puzzles_id_seq', (SELECT MAX(id) FROM puzzles));"
      );
    });
};
