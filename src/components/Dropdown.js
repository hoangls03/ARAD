import React, { useState } from 'react';
import '../css/Dropdown.css'

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    'Trait Theories of Personality',
    'Critical Thinking',
    'Motion Processing',
    'Primacy, Recency',
    'Language Processing',
    'Physiological Measures',
    'Memory as a Process',
    'Levels of Processing',
    'Neuroplasticity',
    'Psychological Influences on Hunger',
    'Psychotherapy, Operational Definitions',
    'Emotion & Cognition',
    'Implicit Attitudes',
    'Self-Regulation',
    'Coping',
    'Burnout',
    'Education',
    'Attitude Change',
    'Early Cognitive Development',
    'Language Development',
    'Adolescence',
    'Emotional Appraisal',
    'Well-Being',
    'HPA Axis',
    'Olfaction',
    'Social Cognition',
    'Attribution',
    'Correlational Designs',
    'Discrimination Training',
    'Mindfulness Training',
    'Hunger Feeding',
    'Physical Development',
    'Genetics',
    'Heritability',
    'Domains of Intelligence',
    'Practice',
    'Theories of Behaviour',
    'Neural Activity',
    'Mental Representations',
    'Reinforcement',
    'Measuring Behaviour',
    'Verbal Representations',
    'Conflict',
    'Memory Palace',
    'Three-component Model, Storage Models of Memory',
    'Vision, Sensory Memory',
    'Memory Consolidation',
    'Stressors',
    'Appraisal',
    'HPA Axis',
    'Gender Differences',
    'Body Dysmorphic Disorder',
    'Problem Solving',
    'Evolutionary Psychology',
    'Rationale Choice Theory',
    'Taste, Attention',
    'Experimental Design',
    'Order Effects',
    'Operational Definitions',
    'Concepts, Metacognition',
    'Critical Thinking',
    'Aphasia',
    'Neurobiological Basis of Language',
    'Associative Learning',
    'Long-Term Memory',
    'Spatial Memory',
    'Neuroplasticity',
    'Measuring Attractiveness',
    'Narcissism',
    'Social-Emotional Development',
    'Naturalistic Observation',
  ];
  // <label htmlFor="topics">Filter topics: </label>
  return (
    <div >
      <div className='filter_height'>
        <img src="filter.png" alt="filter" id='filter-img'className='filter_img'/>
      </div>  
      <select id="topics" onChange={handleChange} value={selectedOption} className='Placeholder_Dropdown'>
      <option value="" className='Placeholder_Dropdown_options'>Filter Topics</option>
        {options.map((option, index) => (
          <option key={index} value={option} className='Placeholder_Dropdown_options'>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
