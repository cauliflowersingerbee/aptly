import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEvents.feature');

defineFeature(feature, test => {

});
