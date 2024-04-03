from django.http.response import JsonResponse
from .models import Product, Category


def product_list(request):
    # select * from api_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def get_product_detail(request, id):
    product = Product.objects.get(id=id)
    data = product.to_json()
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def category_detail(request, id):
    category = Category.objects.get(id=id)
    data = {'category': {
        'name': category.name
    }}
    return JsonResponse(data)


def products_by_category(request, id):
    products = [product.to_json() for product in Product.objects.filter(category_id=id)]
    return JsonResponse(products, safe=False)
