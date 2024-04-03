from django.urls import path

from .views import product_list, get_product_detail, category_list, category_detail, products_by_category

urlpatterns = [
    path('product/', product_list),
    path('product/<int:id>/', get_product_detail),
    path('category/', category_list),
    path('category/<int:id>/', category_detail),
    path('category/<int:id>/products/', products_by_category)
]
