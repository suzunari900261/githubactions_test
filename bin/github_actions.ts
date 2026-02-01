#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {GithubActionsStack} from '../lib/github_actions-stack';

const app = new cdk.App();

new GithubActionsStack(app, 'GithubActionsStack', {

});