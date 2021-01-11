---
title: nn.model load&save 
categories: [pytorch]
comments: true


---

# Model load && Model save

### Core functions

### torch.save 

```python
# Save the model 
torch.save({
            'epoch': epoch,
            'model_state_dict': model.state_dict(),
            'optimizer_state_dict': optimizer.state_dict(),
            'loss': loss,
            ...
            }, PATH)


# Saving Mulpiple Models in One File
torch.save({
            'modelA_state_dict': modelA.state_dict(),
            'modelB_state_dict': modelB.state_dict(),
            'optimizerA_state_dict': optimizerA.state_dict(),
            'optimizerB_state_dict': optimizerB.state_dict(),
            ...
            }, PATH)
```

### torch.load

```python
# Load the model
model = TheModelClass(*args, **kwargs)
optimizer = TheOptimizerClass(*args, **kwargs)

checkpoint = torch.load(PATH)
model.load_state_dict(checkpoint['model_state_dict'])
optimizer.load_state_dict(checkpoint['optimizer_state_dict'])
epoch = checkpoint['epoch']
loss = checkpoint['loss']

model.eval()
# - or -
model.train()


# Loading Multiple Models in one File
modelA = TheModelAClass(*args, **kwargs)
modelB = TheModelBClass(*args, **kwargs)
optimizerA = TheOptimizerAClass(*args, **kwargs)
optimizerB = TheOptimizerBClass(*args, **kwargs)

checkpoint = torch.load(PATH)
modelA.load_state_dict(checkpoint['modelA_state_dict'])
modelB.load_state_dict(checkpoint['modelB_state_dict'])
optimizerA.load_state_dict(checkpoint['optimizerA_state_dict'])
optimizerB.load_state_dict(checkpoint['optimizerB_state_dict'])

modelA.eval()
modelB.eval()
# - or -
modelA.train()
modelB.train()
```

### load_state_dict 

```python
A state_dixt is simply a Python dictionary object that maps each layer to its parameter tensor.

There are two kinds of the state_dict 

# example
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(3, 6, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 16 * 5 * 5)
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x

net = Net()


##### import torch.nn as nn #####
>>> print(type(net.state_dict()))          
<class 'collections.OrderedDict'>

>>> print(net.state_dict().keys())
odict_keys(['conv1.weight', 'conv1.bias', 'conv2.weight', 'conv2.bias', 'fc1.weight', 'fc1.bias', 'fc2.weight', 'fc2.bias', 'fc3.weight', 'fc3.bias'])

>>> print(net.state_dict()['conv1.weight'].shape 
torch.Size([6, 3, 5, 5])
          
>>> print("Model's state_dict:")
>>> for param_tensor in net.state_dict():
>>>     print(param_tensor, "\t", net.state_dict()[param_tensor].size())
Model's state_dict:
conv1.weight     torch.Size([6, 3, 5, 5])
conv1.bias       torch.Size([6])
conv2.weight     torch.Size([16, 6, 5, 5])
conv2.bias       torch.Size([16])
fc1.weight       torch.Size([120, 400])
fc1.bias         torch.Size([120])
fc2.weight       torch.Size([84, 120])
fc2.bias         torch.Size([84])
fc3.weight       torch.Size([10, 84])
fc3.bias         torch.Size([10])
          
          

##### optim state_dict #####
import torch.optim as optim
          
>>> print("Optimizer's state_dict:")
>>> for var_name in optimizer.state_dict():
>>>     print(var_name, "\t", optimizer.state_dict()[var_name])
state    {}
param_groups     [{'lr': 0.001, 'momentum': 0.9, 'dampening': 0, 'weight_decay': 0, 'nesterov': False, 'params': [140222956566080, 140222959564800, 140222925909056, 140222959564480, 140222959564864, 140222959565056, 140222959565120, 140222959565248, 140222959565376, 140222959565504]}]

```



### Other techs for the model

```python
# Warmstarting Model Using Parameters from a Different Model
Save:
torch.save(modelA.state_dict(), PATH)
Load:
modelB = TheModelBClass(*args, **kwargs)
modelB.load_state_dict(torch.load(PATH), strict=False)

# Saving & Loading Model Across Devices
Saving & Loading Model Across Devices
Save on GPU, Load on CPU
Save:

torch.save(model.state_dict(), PATH)
Load:

device = torch.device('cpu')
model = TheModelClass(*args, **kwargs)
model.load_state_dict(torch.load(PATH, map_location=device))

# Save on GPU, Load on GPU
Save on GPU, Load on GPU
Save:
torch.save(model.state_dict(), PATH)
Load:
device = torch.device("cuda")
model = TheModelClass(*args, **kwargs)
model.load_state_dict(torch.load(PATH))
model.to(device)
'Make sure to call input = input.to(device) on any input tensors that you feed to the model


# Save on CPU, Load on GPU
Save:
torch.save(model.state_dict(), PATH)
Load:
device = torch.device("cuda")
model = TheModelClass(*args, **kwargs)
model.load_state_dict(torch.load(PATH, map_location="cuda:0"))  # Choose whatever GPU device number you want
model.to(device)
'Make sure to call input = input.to(device) on any input tensors that you feed to the model


# Saving torch.nn.DataParallel Models
Save:
torch.save(model.module.state_dict(), PATH)
Load:
# Load to whatever device you want
```



### GAN_example 

```python
# save model
torch.save({
            'G': G.state_dict(),
            'D': D.state_dict(),
            'G_optim': G_optim.state_dict(),
            'D_optim': D_optim.state_dict(),
            },'./GAN_model.pt')

model_G = Generator()
model_D = Discriminator()
# load model
checkpoint = torch.load('./GAN_model.pt')

model_G.load_state_dict(checkpoint['G'])
model_D.load_state_dict(checkpoint['D'])
model_G.to(DEVICE)


# sample images
n = 10 
z = torch.randn((n*n),100).to(DEVICE)
labels = torch.LongTensor([i for i in range(10) for _ in range(10)]).to(DEVICE)
Generated_image = model_G(z,labels)
image_numpy=Generated_image.view(n*n, 28, 28).cpu().data.numpy()

def show_images(image,s=5):
  print(image.shape)
  fig=plt.figure(figsize=(10, 10))
  columns = s
  rows = s
  for i in range(1, columns*rows +1):
    fig.add_subplot(rows, columns, i)
    plt.axis('off')
    plt.imshow(image[i-1],cmap='gray')
  plt.show()
  
show_images(image_numpy, s=10)
```



### References

- https://pytorch.org/tutorials/beginner/saving_loading_models.html
- https://pytorch.org/tutorials/recipes/recipes/what_is_state_dict.html#:~:text=In%20PyTorch%2C%20the%20learnable%20parameters,and%20biases)%20of%20a%20torch.&text=Module%20model%20are%20contained%20in,layer%20to%20its%20parameter%20tensor.

