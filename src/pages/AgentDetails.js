import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AgentDetails() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/agent-performance/${id}`)
      .then((response) => response.json())
      .then((data) => setAgent(data))
      .catch((error) => console.error('Error fetching agent details:', error));
  }, [id]);

  if (!agent) return <div>Loading...</div>;

  return (
    <div>
      <h2>Agent Details: {agent.name}</h2>
      <p>ID: {agent.id}</p>
      <p>Conversions: {agent.conversions}</p>
      <p>Leads: {agent.leads}</p>
      <p>Total Sales: {agent.totalSales}</p>
      {/* Additional details here */}
    </div>
  );
}

export default AgentDetails;
