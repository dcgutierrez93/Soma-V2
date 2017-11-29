'use strict'
// =============================================================================

// Dependencies

// =============================================================================
const express = require('express');
const app = express();

// Require .dotenv
require('dotenv').config();

// Set up Api Keys
const APIAI_TOKEN = process.env.APIAI_TOKEN;
const APIAI_SESSION_ID = process.env.APIAI_SESSION_ID;
