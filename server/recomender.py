import pandas as pd
from sklearn.neighbors import NearestNeighbors
import sys
import json

# Sample data
data = {
    'model': ['Car A', 'Car B', 'Car C'],
    'fuel_efficiency': [15, 10, 20],
    'safety_rating': [5, 4, 3],
    'price': [20000, 15000, 25000],
}
df = pd.DataFrame(data)

# Train the model
X = df[['fuel_efficiency', 'safety_rating', 'price']]
model = NearestNeighbors(n_neighbors=2).fit(X)

# Handle input
user_input = json.loads(sys.argv[1])
distances, indices = model.kneighbors([user_input])
recommendations = df.iloc[indices[0]].to_dict(orient="records")
print(json.dumps(recommendations))