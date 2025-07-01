CREATE TABLE IF NOT EXISTS nodes(
    id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    longitude DOUBLE NOT NULL,
    latitude DOUBLE NOT NULL
);

CREATE TABLE IF NOT EXISTS edges(
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_node_id INT NOT NULL,
    finish_node_id INT NOT NULL,
    distance DOUBLE NOT NULL,
    is_shade BOOLEAN,
    is_stairs BOOLEAN,
    is_ramp BOOLEAN,
    FOREIGN KEY (start_node_id) REFERENCES nodes(id) ON DELETE CASCADE,
    FOREIGN KEY (finish_node_id) REFERENCES nodes(id) ON DELETE CASCADE    
);