from rest_framework import status, mixins
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import Company
from ..serializers import CompanySerializer2


class CompanyListAPIView(APIView):

    def get(self, request):

        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status.HTTP_400_BAD_REQUEST)

class CompanyDetailAPIView(APIView):

    def get_object(self, id):
        try:
            company = Company.objects.get(id=id)
            return company
        except Company.DoesNotExist as e:
            return Response({"error": str(e)},
                            status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):

        company = self.get_object(id)
        serializer = CompanySerializer2(company)
        return Response(serializer.data)
    def put(self, request, id):

        company = self.get_object(id)
        serializer = CompanySerializer2(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):

        company = self.get_object(id)
        company.delete()
        return Response({"deleted": True})